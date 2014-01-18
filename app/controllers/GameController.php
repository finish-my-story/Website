<?php

class GameController extends BaseController {

	public function showWelcome()
	{
		return View::make('hello');
	}

}