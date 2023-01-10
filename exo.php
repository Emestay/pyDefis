<?php

// La fonction get_ab prend en entrée un nombre entier n
// et renvoie le couple (a, b) tel que a et b soient les plus proches possibles
function get_ab($n) {
    // On initialise a et b à 0
    $a = 0;
    $b = 0;

    // On initialise la distance à une valeur très grande
    // pour pouvoir la comparer aux autres distances
    $distance = PHP_INT_MAX;

    // On parcourt tous les entiers strictement positifs jusqu'à ce que n soit atteint
    for ($i = 1; $i <= $n; $i++) {
        // On calcule la valeur de b en utilisant la relation n = 13 * a + 7 * b
        $b = ($n - (13 * $i)) / 7;

        // Si b est un entier strictement positif
        // et si la distance entre a et b est inférieure à la distance précédente
        if (is_int($b) && $b > 0 && abs($i - $b) < $distance) {
            // On met à jour a, b et la distance
            $a = $i;
            $b = intval($b);
            $distance = abs($a - $b);
        }
    }

    // On renvoie le couple (a, b)
    return array($a, $b);
}

// Test de la fonction avec n = 3188
$result = get_ab(287);
echo "Pour n = 287, le couple (a, b) est (" . $result[0] . ", " . $result[1] . ")\n";

