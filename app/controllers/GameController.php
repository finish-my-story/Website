<?php

class GameController extends BaseController {

	public function game($id)
	{
		return View::make('game');
	}

}