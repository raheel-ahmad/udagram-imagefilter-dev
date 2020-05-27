"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const path = require('path');
function findEdges(imgPath, lower, upper) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            lower = lower ? lower : '';
            upper = upper ? upper : '';
            const pythonProcess = child_process_1.spawn('python', [
                path.join(__dirname, "opencvfilter.py"),
                '-i', imgPath,
                '-l', lower,
                '-u', upper
            ]);
            if (pythonProcess !== undefined) {
                pythonProcess.stdout.on('data', (data) => {
                    resolve(data.toString());
                });
                process.stderr.on('data', function (data) {
                    console.log(data.toString());
                    resolve(data);
                });
            }
            else {
                reject('Unable to process the image in python');
            }
        }));
    });
}
exports.findEdges = findEdges;
//# sourceMappingURL=child-process.js.map