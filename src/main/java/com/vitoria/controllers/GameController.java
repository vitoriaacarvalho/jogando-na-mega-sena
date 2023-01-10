package com.vitoria.controllers;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vitoria.models.Game;
import com.vitoria.repository.GameRepository;

import lombok.extern.log4j.Log4j2;


@RestController
@RequestMapping("/games")
@Log4j2
@CrossOrigin(origins = "*")
public class GameController {
	
	public Integer personalizedId;
	
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
	
	
	@PutMapping("update/{id}")
	public ResponseEntity<Game> update(@PathVariable Integer id, @RequestBody Game game){
		Game updatedGame=repo.findById(id).get();
		updatedGame.setNumbers(game.getNumbers());
		repo.save(updatedGame);
		return ResponseEntity.ok().body(updatedGame);
	}

	@GetMapping("/game12")
	public ResponseEntity<List<Integer>> shuffleNumbers(){
		Game game= postingShuffledGame();
		return ResponseEntity.ok().body(game.getNumbers());
	}
	
	
	@DeleteMapping("/deleteAll")
	public ResponseEntity<Void> deletingAll(){
		repo.deleteAll();
		return ResponseEntity.noContent().build();
	}
	
	@DeleteMapping("/delete")
	public ResponseEntity<Void> deleteById(@PathVariable Integer id){
		repo.deleteById(id);
		return ResponseEntity.noContent().build();
	}
	
	
	@PostMapping
	public Game postingShuffledGame() {
		Integer[] numbers= {1,2,3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,56,57,58,59,60};
	
		List<Integer> intList = new ArrayList<Integer>(Arrays.asList(numbers));
		Collections.shuffle(intList);
		
		intList.toArray(numbers);
		
		List<Integer> finalNumbers=new ArrayList<>();
		Integer count=0;
		while(count<=5) {
			finalNumbers.add(numbers[count]);
			count++;
		}
		Game finalGame=new Game();
		finalGame.setNumbers(finalNumbers);
		repo.save(finalGame);
		return finalGame;
	}
	
}
