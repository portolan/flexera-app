package com.flexera.app.repository;

import com.flexera.app.domain.People;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "people")
public interface PeopleRepository extends PagingAndSortingRepository<People, Long> {

}
