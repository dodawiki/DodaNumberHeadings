<?php

class DodaNumberHeadingsHooks
{
	public static function onBeforePageDisplay( OutputPage $out )
	{
		$out->addModules('ext.DodaNumberHeadings');
	}
}