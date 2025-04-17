<?php
    header("Cache-Control: no-cache, no-store, must-revalidate");
    header("Pragma: no-cache");
    header("Expires: 0");

    $rand = rand(0, 1);
    $GUI_URL = "gui.html";
    $MS_URL = "ms.html";

    if ($rand == 0) {
        $content = file_get_contents($GUI_URL);
        echo $content;
    } else {
        $content = file_get_contents($MS_URL);
        echo $content;
    }