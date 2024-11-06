package com.example.banking_management_system.controller;

import com.example.banking_management_system.service.LoanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/loans")
@CrossOrigin(origins = "http://localhost:3000")
public class LoanController {

    @Autowired
    private LoanService loanService;

    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @PutMapping("/approve/{loanId}")
    public ResponseEntity<?> approveLoan(@PathVariable Long loanId) {
        // Added log to verify loan approval process
        System.out.println("Attempting to approve loan with ID: " + loanId);
        loanService.approveLoan(loanId);
        return ResponseEntity.ok("Loan approved successfully");
    }

    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @PutMapping("/reject/{loanId}")
    public ResponseEntity<?> rejectLoan(@PathVariable Long loanId) {
        // Added log to verify loan rejection process
        System.out.println("Attempting to reject loan with ID: " + loanId);
        loanService.rejectLoan(loanId);
        return ResponseEntity.ok("Loan rejected successfully");
    }
}
