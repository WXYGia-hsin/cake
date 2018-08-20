package com.wang.cake.controller;

import com.wang.cake.model.User;
import com.wang.cake.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;
    @RequestMapping(value = "/login",method = RequestMethod.POST)
    public ResponseEntity<User> login(@RequestBody User user){
        User user1=userService.login(user.getUsername(),user.getPassword());
        if(user1!=null) {
            return new ResponseEntity<User>(user1,HttpStatus.OK);
        }else{
            return new ResponseEntity<User>(HttpStatus.CONFLICT);

        }


    }
}
