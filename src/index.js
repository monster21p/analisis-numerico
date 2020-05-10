const tablebody = document.getElementById('tablebody');
math.config({
	number: 'number',
});
let menu = `
seleccione el metodo a usar:
-----------------------------------------
1. metodo de biseccion
2. metodo de regla falsa
3. metodo abierto
4. metodo Newton-Raphson
5. metodo de la secante
6. salir
-----------------------------------------`;
var Cs = 0,
	i = 0,
	ii = 0,
	op,
	Es = 0,
	Ev = 0,
	Ea = 0,
	Ex = 0,
	Exd = 0,
	Xi = 0,
	Xn = 0,
	Xr = 0,
	Xo = 0,
	X1 = 0,
	fxi = 0,
	fxn = 0,
	fxr = 0,
	fxo = 0,
	dxfxo = 0,
	fx1 = 0,
	Vv = 0,
	I = 0,
	T = 0,
	F1 = 0,
	F2 = 0,
	ff = 0;

const data = prompt(menu);
op = parseInt(data, 10);
console.log(`ha seleccionado la opcion: ${op}`);

switch (op) {
	case 1:
		console.log('--> metodo de biseccion');

		Vv = prompt('digite valor verdadero');
		console.log(`valor verdadero = ${Vv}`);

		Xi = prompt('digite Xi');
		console.log(`Xi = ${Xi}`);

		Xn = prompt('digite Xn');
		console.log(`Xn = ${Xn}`);

		Cs = prompt('digite cant. de cifras significativas');
		console.log(`cant. de cifras significativas = ${Cs}`);

		Ex = prompt('digite la expresion');
		console.log(`expresion: ${Ex}`);

		Es = 0.5 * math.pow(10, 2 - Cs);
		console.log(`Tolerencia = ${Es} %`);

		do {
			let scope = {
				Xi: Xi,
				Xn: Xn,
			};
			let scope1 = {
				X: Xi,
			};
			let scope2 = {
				X: Xn,
			};
			Xr = math.evaluate('((Xi + Xn) / 2)', scope);

			let scope3 = {
				X: Xr,
			};

			fxi = math.evaluate(`(${Ex})`, scope1);

			fxn = math.evaluate(`(${Ex})`, scope2);

			fxr = math.evaluate(`(${Ex})`, scope3);

			Ev = ((Vv - Xr) / Vv) * 100;
			Ea = math.abs(((Xr - I) / Xr) * 100);

			console.log(`
			-----------------------------------------
			${(i += 1)}) iteracion [${Xi},${Xn}]
			Xr = ${Xr}
			f(xi) = f(${Xi}) = ${fxi}
			f(xn) = f(${Xn}) = ${fxn}
			f(xr) = f(${Xr}) = ${fxr}
			
			error verdadero = ${Ev} %`); //Ev
			Ea == 100
				? console.log(`
			error aprox. = NULL`)
				: console.log(`
			error aprox. = ${Ea} %`); //|Ea|

			let tableBody = `
			<tr>
			<td>${i}</td>
			<td>${Xr}</td>
			<td>${Ev}</td>
			<td>${Ea}</td>
			</tr>`;
			tablebody.innerHTML += tableBody;

			console.log('-----------------------------------------');

			I = Xr;
			ff = fxi * fxr;

			if (ff < 0) {
				Xn = I;
			} else {
				Xi = I;
			}
		} while (Ea > Es);
		break;
	case 2:
		console.log('--> metodo de regla falsa');
		Vv = prompt('digite valor verdadero');
		console.log(`valor verdadero = ${Vv}`);

		Xi = prompt('digite Xi');
		console.log(`Xi = ${Xi}`);

		Xn = prompt('digite Xn');
		console.log(`Xn = ${Xn}`);

		Cs = prompt('digite cant. de cifras significativas');
		console.log(`cant. de cifras significativas = ${Cs}`);

		Ex = prompt('digite la expresion');
		console.log(`expresion: ${Ex}`);

		Es = 0.5 * math.pow(10, 2 - Cs);
		console.log(`Tolerencia = ${Es} %`);

		do {
			let scope = {
				Xi: Xi,
				Xn: Xn,
			};
			let scope1 = {
				X: Xi,
			};
			let scope2 = {
				X: Xn,
			};

			fxi = math.evaluate(`(${Ex})`, scope1);

			fxn = math.evaluate(`(${Ex})`, scope2);

			Xr = math.evaluate(`Xn-(${fxn}*(Xi - Xn)) / (${fxi}-${fxn})`, scope);

			let scope3 = {
				X: Xr,
			};
			fxr = math.evaluate(`(${Ex})`, scope3);

			Ev = ((Vv - Xr) / Vv) * 100;
			Ea = math.abs(((Xr - I) / Xr) * 100);

			console.log('-----------------------------------------');

			console.log(`
			${(i += 1)}) iteracion [${Xi},${Xn}]
			Xr = ${Xr};
			f(xi) = f(${Xi}) = ${fxi}
			f(xn) = f(${Xn}) = ${fxn}
			f(xr) = f(${Xr}) = ${fxr}

			error verdadero = ${Ev} %`);
			Ea == 100
				? console.log('error aprox. =')
				: console.log(`
				error aprox. = ${Ea} %`);

			let tableBody = `
			<tr>
			<td>${i}</td>
			<td>${Xr}</td>
			<td>${Ev}</td>
			<td>${Ea}</td>
			</tr>`;
			tablebody.innerHTML += tableBody;
			console.log('-----------------------------------------');

			I = Xr;
			ff = fxi * fxr;

			if (ff < 0) {
				Xn = I;
			} else {
				Xi = I;
			}
		} while (Ea > Es);
		break;
	case 3:
		console.log('--> metodo abierto');
		Vv = prompt('digite valor verdadero');
		console.log(`valor verdadero = ${Vv}`);

		Xo = prompt('digite Xo');
		console.log(`Xo = ${Xo}`);

		Cs = prompt('digite cant. de cifras significativas');
		console.log(`cant. de cifras significativas = ${Cs}`);

		Ex = prompt('digite la expresion');
		console.log(`expresion: ${Ex}`);

		Es = 0.5 * math.pow(10, 2 - Cs);
		console.log(`Tolerencia = ${Es} %`);

		do {
			let scope2 = {
				X: Xo,
			};

			Xi = math.evaluate(`${Ex}`, scope2);

			Ev = ((Vv - Xi) / Vv) * 100;
			Ea = math.abs(((Xi - Xo) / Xi) * 100);

			console.log(`
			-----------------------------------------
			${(i += 1)}) iteracion
			X${(ii += 1)} = ${Xi}
			error verdadero = ${Ev} %`);
			Ea == 100
				? console.log('error aprox. =')
				: console.log(`
				error aprox. = ${Ea} %`);

			console.log('-----------------------------------------');

			Xo = Xi;
		} while (Ea > Es);
		break;
	case 4:
		console.log('--> metodo Newton-Raphson');

		Vv = prompt('digite valor verdadero');
		console.log(`valor verdadero = ${Vv}`);

		Xo = prompt('digite Xo');
		console.log(`Xo = ${Xo}`);

		Cs = prompt('digite cant. de cifras significativas');
		console.log(`cant. de cifras significativas = ${Cs}`);

		Ex = prompt('digite la expresion');
		console.log(`expresion: ${Ex}`);

		Exd = math.derivative(`${Ex}`, 'X', { simplify: false });
		console.log(`expresion(derivada): ${Exd}`);

		Es = 0.5 * math.pow(10, 2 - Cs);
		console.log(`Tolerencia = ${Es} %`);

		do {
			let scope = {
				X: Xo,
			};
			fxo = math.evaluate(`${Ex}`, scope); //exp(-Xo) - Xo;
			dxfxo = math.evaluate(`${Exd}`, scope); //-exp(-Xo) - 1;

			Xi = (Xo - fxo) / dxfxo;

			Ev = ((Vv - Xi) / Vv) * 100;
			Ea = math.abs(((Xi - Xo) / Xi) * 100);

			console.log(`
			-----------------------------------------
			${(i += 1)}) iteracion
			X${(ii += 1)} = ${Xi}
			error verdadero = ${Ev} %`);
			Ea == 100
				? console.log('error aprox. =')
				: console.log(`
			error aprox. = ${Ea} %`);

			console.log('-----------------------------------------');

			Xo = Xi;
		} while (Ea >= Es);
		break;
	case 5:
		console.log('--> metodo de la secante');

		Vv = prompt('digite valor verdadero');
		console.log(`valor verdadero = ${Vv}`);

		Xo = prompt('digite X-1');
		console.log(`X-1 = ${Xo}`);

		X1 = prompt('digite X0');
		console.log(`X0 = ${X1}`);

		Cs = prompt('digite cant. de cifras significativas');
		console.log(`cant. de cifras significativas = ${Cs}`);

		Ex = prompt('digite la expresion');
		console.log(`expresion: ${Ex}`);

		Es = 0.5 * math.pow(10, 2 - Cs);
		console.log(`Tolerencia = ${Es} %`);

		do {
			let scope1 = {
				X: Xo,
			};
			let scope2 = {
				X: X1,
			};
			fxo = math.evaluate(`${Ex}`, scope1); //exp(-Xo) - Xo;
			fx1 = math.evaluate(`${Ex}`, scope2); //exp(-X1) - X1;

			F1 = Xo;
			F2 = X1;

			Xi = X1 - (fx1 * (X1 - Xo)) / (fx1 - fxo);

			Ev = ((Vv - Xi) / Vv) * 100;
			Ea = math.abs(((Xi - X1) / Xi) * 100);

			console.log(`
			-----------------------------------------
			${(i += 1)}) iteracion
			X${(ii += 1)} = ${Xi}
			X-1 = ${Xo}  X0 = ${X1}
			f(x-1) = ${fxo}
			f(x0) = ${fx1}
			error verdadero = ${Ev} %`);
			Ea == 100
				? console.log('error aprox. =')
				: console.log(`
				error aprox. = ${Ea} %`);

			console.log('-----------------------------------------');

			Xo = F2;
			X1 = Xi;
		} while (Ea > Es);
		break;
	default:
		break;
}
console.log('-----------------------------------------');
