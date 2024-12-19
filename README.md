# Karel-Hra
Popis
Tento jednoduchý herní projekt umožňuje hráči ovládat robota Karela na herní ploše o velikosti 10x10 polí. Karel je řízen pomocí textových příkazů, které mohou zahrnovat pohyb, otáčení, a umisťování objektů na herní pole.

Funkce
Pohyb Karela: Karel se pohybuje po mřížce na základě příkazů. Může se pohybovat do všech čtyř směrů (vpravo, dolů, vlevo, nahoru).
Otáčení Karela: Karel se může otáčet o 90 stupňů podle zadaného příkazu.
Ukládání a opakování příkazů: Příkazy mohou být uloženy a opakovány.
Umístění objektů: Karel může umístit objekty do jednotlivých polí, jako jsou barvy nebo jiné předměty.
Příkazy
Příkazy se zadávají v textovém poli, kde každý příkaz je na samostatném řádku. Příkazy jsou rozděleny do několika typů:

1. RESET
Resetuje pozici Karela na výchozí (0, 0) a nastaví směr na "vpravo".
Syntax: RESET
2. KROK
Pohne Karel o stanovený počet kroků. Krok je směrován podle aktuální orientace Karela (vpravo, dolů, vlevo, nahoru).
Syntax: KROK [počet] (např. KROK 3 znamená posunout Karela o 3 kroky vpřed).
3. VLEVOBOK
Otáčí Karela doleva. Karel může otáčet o 1 nebo více kroků (každý krok znamená otáčení o 90 stupňů).
Syntax: VLEVOBOK [počet] (např. VLEVOBOK 1 znamená otočit Karela o 90 stupňů doleva).
4. POLOZ
Umístí objekt na aktuální pozici Karela. Můžete umístit různé barvy objektů.
Syntax: POLOZ [objekt] (např. POLOZ modrá umístí modrý objekt na pozici Karela).
5. REPEAT
Opakuje poslední zadané příkazy. Pokud žádné příkazy nejsou uloženy, zobrazí se varování.
Syntax: REPEAT 
