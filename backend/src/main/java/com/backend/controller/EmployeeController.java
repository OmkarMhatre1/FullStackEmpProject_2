package com.backend.controller;

import com.backend.model.EmployeeRequest;
import com.backend.model.EmployeeResponse;
import com.backend.model.EmployeeUpdate;
import com.backend.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


//@CrossOrigin("*")
//@CrossOrigin(origins = "http://localhost:3000")
@CrossOrigin(origins = "http://localhost:5173/")
@RestController
@RequiredArgsConstructor
@RequestMapping("/employee")
public class EmployeeController {

    private final EmployeeService service;

//    @PostMapping
//    public ResponseEntity<String> addEmployee(@RequestBody EmployeeRequest employeeRequest){
//        String empId = service.addEmployee(employeeRequest);
//        return new ResponseEntity<>(empId, HttpStatus.CREATED);
//    }

    @PostMapping
    public ResponseEntity<EmployeeRequest> addEmployee(@RequestBody EmployeeRequest employeeRequest){
        EmployeeRequest empId = service.addEmployee(employeeRequest);
        return new ResponseEntity<>(empId, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<EmployeeResponse> getEmpById(@PathVariable String id){
       EmployeeResponse employeeResponse = service.getById(id);
       return  ResponseEntity.ok(employeeResponse);
    }

    @GetMapping
    public ResponseEntity<List<EmployeeResponse>> getAllEmp(){
        List<EmployeeResponse> employeeResponses = service.getAllEmp();
        return new ResponseEntity<>(employeeResponses, HttpStatus.OK);
    }

//    @GetMapping
//    @ResponseStatus(HttpStatus.OK)
//    public List<EmployeeResponse> getAllEmp(){
//        List<EmployeeResponse> employeeResponses = service.getAllEmp();
//       return employeeResponses;
//    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteEmp(@PathVariable String id){
       String emp = service.deleteEmp(id);
       return new ResponseEntity<>(emp, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<EmployeeUpdate> updateEmp(@PathVariable String id, @RequestBody EmployeeUpdate employeeUpdate){
        EmployeeUpdate update = service.updateEmp(id, employeeUpdate);
        return  ResponseEntity.ok(update);
    }
}
