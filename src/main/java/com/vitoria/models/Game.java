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
	
	@Column(name="game")
    @ElementCollection(targetClass=Integer.class)
	private List<Integer> numbers;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="gameId")
	private Integer gameId;
	
	public Game() {
	}
	
	public Game(List<Integer> numbers, Integer gameId) {
		this.numbers = numbers;
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
