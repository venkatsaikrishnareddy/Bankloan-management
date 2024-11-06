package com.example.banking_management_system.service;

import com.example.banking_management_system.model.Loan;
import com.example.banking_management_system.repository.LoanRepository;
import com.example.banking_management_system.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoanService {

    @Autowired
    private LoanRepository loanRepository;

    @Autowired
    private UserRepository userRepository;

    public Loan applyForLoan(Loan loan, Long userId) {
        // Find the user by userId and set it to the loan
        loan.setStatus("Pending");
        loan.setUser(userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found")));
        return loanRepository.save(loan);
    }

    public List<Loan> getLoansByUser(Long userId) {
        // Find the user by userId and fetch loans by user
        return loanRepository.findByUser(userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found")));
    }

    // Method to approve a loan by updating its status to "Approved"
    public void approveLoan(Long loanId) {
        Loan loan = loanRepository.findById(loanId)
                .orElseThrow(() -> new RuntimeException("Loan not found"));
        loan.setStatus("Approved");
        loanRepository.save(loan);
    }

    // Method to reject a loan by updating its status to "Rejected"
    public void rejectLoan(Long loanId) {
        Loan loan = loanRepository.findById(loanId)
                .orElseThrow(() -> new RuntimeException("Loan not found"));
        loan.setStatus("Rejected");
        loanRepository.save(loan);
    }
}
