package com.flexera.app.controller;

import com.flexera.app.domain.People;
import com.flexera.app.repository.PeopleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RequestMapping("/people")
@RestController(value = "people")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class PeopleController {

    @Autowired
    private PeopleRepository peopleRepository;

    @RequestMapping(method = RequestMethod.GET)
    public Iterable<People> findAll(){
        return peopleRepository.findAll();
    }

    @RequestMapping(method = RequestMethod.POST)
    public People insert(@RequestBody People people){
        return peopleRepository.save(people);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public People edit(@RequestBody People people){
        return peopleRepository.save(people);
    }

    @RequestMapping(method = RequestMethod.DELETE)
    public String delete(@RequestBody People people){
        try {
            peopleRepository.delete(people);
            return "Deleted successfully !!!";
        } catch (Exception ex){
            return "Error deleting this person. Error: "+ex.getMessage();
        }
    }

}
