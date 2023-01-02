package com.vitoria.controllers;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vitoria.models.Game;
import com.vitoria.repository.GameRepository;

@RestController
@RequestMapping("/games")
public class GameController {

	@Autowired
	private GameRepository repo;
	
	
	@GetMapping
	public ResponseEntity<List<Game>> findAll(){
		List<Game> games= repo.findAll();
		return ResponseEntity.ok().body(games);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Optional<Game>> findById(@PathVariable Integer id){
		Optional<Game> game=repo.findById(id);
		return ResponseEntity.ok().body(game);
	}
	
	@PostMapping
	public ResponseEntity<Game> insert(@RequestBody Game game){
		Game entity=game;
		repo.save(entity);
		return ResponseEntity.ok().body(entity);
	}
	
	@PutMapping("update/{id}")
	public ResponseEntity<Game> update(@PathVariable Integer id, @RequestBody Game game){
		Game updatedGame=repo.findById(id).get();
		updatedGame.setNumbers(game.getNumbers());
		repo.save(updatedGame);
		return ResponseEntity.ok().body(updatedGame);
	}
	
	@GetMapping("/shuffle")
	public List<Integer> shuffleNumbers(){
		Integer[] numbers= {1,2,3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,56,57,58,59,60};
		List<Integer> intList=Arrays.asList(numbers);
		Collections.shuffle(intList);
		intList.toArray(numbers);
		List<Integer> game=new ArrayList<>();
		game.add(numbers[0]);
		game.add(numbers[1]);
		game.add(numbers[2]);
		game.add(numbers[3]);
		game.add(numbers[4]);
		game.add(numbers[5]);
		game.add(numbers[6]);
		return game;
	}
	
	
	
	
	
	
	
	
	
	
}
