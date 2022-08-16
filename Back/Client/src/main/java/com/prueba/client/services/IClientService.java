package com.prueba.client.services;

import org.springframework.http.ResponseEntity;

import com.prueba.client.model.Client;
import com.prueba.client.response.ClientResponseRest;

public interface IClientService {

	ResponseEntity<ClientResponseRest> search();

	ResponseEntity<ClientResponseRest> save(Client client);

}
