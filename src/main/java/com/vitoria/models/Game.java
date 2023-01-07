package com.vitoria.models;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="games")
public class Game implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Column(name="game_numbers")
	@ElementCollection(targetClass=Integer.class)
	private List<Integer> numbers;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="game_id")
	private Integer gameId;
	
	public Game() {
	}
	
	public Game(List<Integer> finalNumbers, Integer gameId) {
		this.numbers = finalNumbers;
		this.gameId = gameId;
	}
	
	public List<Integer> getNumbers() {
		return numbers;
	}

	public void setNumbers(List<Integer> numbers) {
		this.numbers = numbers;
	}

	public Integer getGameId() {
		return gameId;
	}

	public void setGameId(Integer gameId) {
		this.gameId = gameId;
	}
	
	
}