var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var tableElement = document.querySelector('.table-content');
var addBtn = document.querySelector('#agregar');
var form = document.querySelector('#form');
var modal = document.querySelector('#modal');
addBtn === null || addBtn === void 0 ? void 0 : addBtn.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('click');
    modal === null || modal === void 0 ? void 0 : modal.classList.toggle('active');
});
modal === null || modal === void 0 ? void 0 : modal.addEventListener('click', function (e) {
    e.stopPropagation();
    e.stopImmediatePropagation();
    console.log('hokl');
});
var autoForm = {
    anio: '',
    color: '',
    marca: '',
    modelo: '',
    placa: '',
};
form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!(Object.values(autoForm).includes(''))) {
        console.log('lleno');
        fetch('https://confutatis.com.mx/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(autoForm)
        })
            .then(function (response) { return response.json(); })
            .then(function (datos) {
            console.log(datos);
            modal === null || modal === void 0 ? void 0 : modal.classList.toggle('active');
            getDatos();
        })
            .catch(function (e) {
            console.log(e);
            modal === null || modal === void 0 ? void 0 : modal.classList.toggle('active');
            getDatos();
        });
        return;
    }
});
form === null || form === void 0 ? void 0 : form.addEventListener('input', function (e) {
    var _a;
    e.preventDefault();
    var valueInput = e.target;
    autoForm = __assign(__assign({}, autoForm), (_a = {}, _a[valueInput.name] = valueInput.value, _a));
    console.log(autoForm);
});
function getDatos() {
    return __awaiter(this, void 0, void 0, function () {
        var response, datos;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('https://davesystem.com.mx/')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    datos = _a.sent();
                    cleanTable();
                    datos.forEach(function (auto) {
                        setValuesTable(auto);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
getDatos();
function setValuesTable(autos) {
    var id = autos.id, marca = autos.marca, modelo = autos.modelo, anio = autos.anio, color = autos.color, placa = autos.placa;
    var tableRow = document.createElement('div');
    tableRow.classList.add('table-row');
    var rowId = document.createElement('div');
    rowId.classList.add('table-data');
    rowId.textContent = id.toString();
    var rowAño = document.createElement('div');
    rowAño.classList.add('table-data');
    rowAño.textContent = anio.toString();
    var rowColor = document.createElement('div');
    rowColor.classList.add('table-data');
    rowColor.textContent = color;
    var rowMarca = document.createElement('div');
    rowMarca.classList.add('table-data');
    rowMarca.textContent = marca;
    var rowModelo = document.createElement('div');
    rowModelo.classList.add('table-data');
    rowModelo.textContent = modelo;
    var rowPlaca = document.createElement('div');
    rowPlaca.classList.add('table-data');
    rowPlaca.textContent = placa;
    tableRow === null || tableRow === void 0 ? void 0 : tableRow.appendChild(rowId);
    tableRow === null || tableRow === void 0 ? void 0 : tableRow.appendChild(rowMarca);
    tableRow === null || tableRow === void 0 ? void 0 : tableRow.appendChild(rowModelo);
    tableRow === null || tableRow === void 0 ? void 0 : tableRow.appendChild(rowAño);
    tableRow === null || tableRow === void 0 ? void 0 : tableRow.appendChild(rowColor);
    tableRow === null || tableRow === void 0 ? void 0 : tableRow.appendChild(rowPlaca);
    tableElement === null || tableElement === void 0 ? void 0 : tableElement.appendChild(tableRow);
}
function cleanTable() {
    while (tableElement === null || tableElement === void 0 ? void 0 : tableElement.firstChild) {
        tableElement.removeChild(tableElement.firstChild);
    }
}
