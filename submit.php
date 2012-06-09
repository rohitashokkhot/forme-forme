<?php
$p = "<?php\n echo \"This is a PHP page. How do you like it?\";\n ?>";
$a = fopen("form.php", 'w');
fwrite($a, $p);
fclose($a);
chmod("form.php", 0755);
?>