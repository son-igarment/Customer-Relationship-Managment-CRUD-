package com.phamlenogocson.crm.restfulwebservices.repository;

import com.phamlenogocson.crm.restfulwebservices.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {

}
