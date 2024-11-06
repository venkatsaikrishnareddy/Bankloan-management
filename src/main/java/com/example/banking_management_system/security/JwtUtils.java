package com.example.banking_management_system.security;

import io.jsonwebtoken.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class JwtUtils {

    @Value("${app.jwtSecret}")
    private String jwtSecret;

    @Value("${app.jwtExpirationMs}")
    private int jwtExpirationMs;

    // Generate JWT Token
    public String generateJwtToken(Authentication authentication) {
        UserDetailsImpl userPrincipal = (UserDetailsImpl) authentication.getPrincipal();

        // Include roles in the JWT claims
        List<String> roles = userPrincipal.getAuthorities().stream()
                .map(role -> role.getAuthority())
                .collect(Collectors.toList());

        return Jwts.builder()
                .setSubject(userPrincipal.getUsername()) // Set username in the token payload
                .claim("roles", roles) // Add roles to the claims
                .setIssuedAt(new Date()) // Set issue time
                .setExpiration(new Date((new Date()).getTime() + jwtExpirationMs)) // Set expiration time
                .signWith(SignatureAlgorithm.HS512, jwtSecret) // Sign the JWT with the secret key
                .compact();
    }

    // Extract Username from JWT Token
    public String getUsernameFromJwtToken(String token) {
        return Jwts.parser()
                .setSigningKey(jwtSecret) // Set the key to verify the signature
                .parseClaimsJws(token)
                .getBody()
                .getSubject(); // Get the username (subject) from the token
    }

    // Extract Roles from JWT Token
    public List<String> getRolesFromJwtToken(String token) {
        List<String> roles = Jwts.parser()
                .setSigningKey(jwtSecret) // Set the key to verify the signature
                .parseClaimsJws(token)
                .getBody()
                .get("roles", List.class); // Get roles from the token claims

        // Added log to verify roles extracted
        System.out.println("Roles from token: " + roles);
        return roles;
    }

    // Validate JWT Token
    public boolean validateJwtToken(String authToken) {
        try {
            Jwts.parser()
                    .setSigningKey(jwtSecret)
                    .parseClaimsJws(authToken); // Parse and validate JWT token
            return true;
        } catch (ExpiredJwtException e) {
            System.out.println("JWT token is expired: " + e.getMessage());
        } catch (UnsupportedJwtException e) {
            System.out.println("JWT token is unsupported: " + e.getMessage());
        } catch (MalformedJwtException e) {
            System.out.println("Invalid JWT token: " + e.getMessage());
        } catch (SignatureException e) {
            System.out.println("Invalid JWT signature: " + e.getMessage());
        } catch (IllegalArgumentException e) {
            System.out.println("JWT claims string is empty: " + e.getMessage());
        }
        return false;
    }

    // Method to resolve token from the request header
    public String resolveToken(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");
        if (bearerToken != null && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7);
        }
        return null;
    }
}
