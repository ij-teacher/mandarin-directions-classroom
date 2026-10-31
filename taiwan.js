'use strict';
(()=>{const key='mandarin-taiwan-answers-v1', fields=Array.from(document.querySelectorAll('#taiwan-questions textarea')),status=document.getElementById('taiwan-save-status');let answers={};
try{const value=JSON.parse(localStorage.getItem(key)||'{}');if(value&&typeof value==='object'&&!Array.isArray(value))answers=value}catch{}
fields.forEach((field,i)=>{field.value=typeof answers[i]==='string'?answers[i]:'';field.addEventListener('input',()=>{answers[i]=field.value;try{localStorage.setItem(key,JSON.stringify(answers));status.textContent='已儲存作答至此瀏覽器。'}catch{status.textContent='此瀏覽器無法儲存作答，離開前請自行複製。'}})});
document.getElementById('taiwan-clear').addEventListener('click',()=>{if(!window.confirm('確定清除這個子單元的七題作答？'))return;answers={};fields.forEach(field=>field.value='');try{localStorage.removeItem(key)}catch{}status.textContent='已清除本單元作答。'});
})();