package com.example.banking_management_system.repository;

import com.example.banking_management_system.model.Loan;
import com.example.banking_management_system.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LoanRepository extends JpaRepository<Loan, Long> {
    List<Loan> findByUser(User user);
}
