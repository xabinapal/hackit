/*
    Copyright 2010-2014 Hector Martin "marcan" <marcan@marcan.st>

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

function showhide() {
    var btn = document.getElementById("showhidebtn");
    var pwd = document.getElementById("password");

    if (pwd.type === "password") {
        pwd.type = "text";
        btn.value = "Ocultar";
    } else {
        pwd.type = "password";
        btn.value = "Mostrar";
    }
}

function skip() {
    if (confirm("¿Seguro que quieres aparcar temporalmente este nivel?\n\nRecuerda que esta acción no se puede deshacer hasta que resuelvas el nivel.")) {
		var frm = document.getElementById("skipform");
		frm.submit();
    }
}

function confirm_delete()
{
    return confirm("¿Estás seguro de que quieres borrar tu cuenta?\n\nNo optarás a premio y perderás todo tu progreso almacenado.");
}
