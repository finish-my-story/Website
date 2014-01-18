<?php

class GameController extends BaseController {

	public function gameWelcome()
	{
		return View::make('game');
	}

}