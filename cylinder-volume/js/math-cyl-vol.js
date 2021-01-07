/*****************************************************************************
/*                                                                           */
/*         JavaScript program za izračun zapremine valjka                    */
/*         AUTOR: IVAN MEETSGIJOE    DATUM: 07.01.2020.                      */
/*                                                                           */
/*         Zapremina valjka: V = r2 * π * H                                  */
/*         r – poluprečnik osnove valjka                                     */
/*         H – visina                                                        */
/*         π – konstanta Pi ~ 3,14                                           */
/*                                                                           */
/*    Korisniku je omogućen unos vrijednosti poluprečnika i visine, nakon    */
/*    čega se rezultat prikazuje unutar modalnog prozora za prikaz poruka.   */ 
/*                                                                           */ 
/*****************************************************************************/


document.getElementById("button").addEventListener("click", function () {
  // ove varijable se pri izvršavanju neće redefinisati, zato sve const 
  const PI = 3.14;  
  const POLUPRECNIK = prompt("Unesite brojčanu vrijednost poluprečnika (bez fizičkih jedinica):", 0);
  const VISINA = prompt("Unesite brojčanu vrijednost visine (bez fizičkih jedinica):", 0);
  
  const ZAPREMINA = POLUPRECNIK * VISINA * PI;

  alert("Zapremina valjka je: " + ZAPREMINA.toFixed(2));
});
