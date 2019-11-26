import { rejects } from "assert";

export default function getData() {
    return new Promise((resolve, reject) => {
        resolve('ok');
        reject('no')
    })
}