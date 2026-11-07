'use strict';
const assert=require('node:assert/strict');
const fs=require('fs'),vm=require('vm'),path=require('path');
const app=fs.readFileSync(path.join(__dirname,'../app.js'),'utf8');
const html=fs.readFileSync(path.join(__dirname,'../index.html'),'utf8');
const code=app.slice(app.indexOf('function learningTopicFor(data){'),app.indexOf('function currentLearningResource()'));
const learningTopicFor=vm.runInNewContext(code+';learningTopicFor');
const cases=[
 ['fund selection and suitability', {intent:'To build long-term savings.',concern:"I'm confused about the mutual funds I selected. I don't know whether they are suitable for my goals.",context:''},'fundChoice'],
 ['fund comparison', {intent:'I want savings',concern:'I cannot tell which schemes are different',context:''},'fundChoice'],
 ['affordability not payment', {intent:'To build savings for my future',concern:"My monthly expenses have increased and I'm struggling to manage my SIP payments. I'm unsure whether I can afford to continue investing the same amount.",context:"I have upcoming family expenses and don't want to compromise essential needs."},'budget'],
 ['financial stress', {intent:'To save',concern:'My income dropped, so making my monthly instalment is difficult',context:''},'budget'],
 ['genuine failed instalment', {intent:'To save',concern:'My SIP instalment failed this month even though I had enough money in my bank account.',context:''},'payment'],
 ['failed mandate', {intent:'To save',concern:'My bank rejected the SIP mandate.',context:''},'payment'],
 ['return worries', {intent:'Build savings',concern:'My returns are negative after investing every month.',context:''},'returns'],
 ['unset goal', {intent:'Not sure why I started',concern:'I do not know my original purpose',context:''},'goal'],
 ['SIP basics', {intent:'To save',concern:'How does a SIP work?',context:''},'basics']
];
for (const [label,data,expected] of cases) assert.equal(learningTopicFor(data),expected,label);
assert(app.includes('learningTopicManuallyChanged=true;'),'topic manual state');
assert(app.includes('resetLearning(response,{preserveTopic:true})'),'topic preserved when switching clarity');
assert(app.includes('selectedLearningTopic=learningTopicFor(lastData)'),'topic auto matched for new reflection');
assert(app.includes('Check the official scheme information for the funds you hold'),'fund suitability actionable neutral step');
assert(html.includes('hosted on Vercel'),'privacy points to current host');
assert(!html.includes('Netlify server function'),'privacy does not name prior host');
assert(fs.existsSync(path.join(__dirname,'../api/reflect.mjs')),'Vercel backend present');
console.log('PASS '+cases.length+' scenario matches and 7 implementation checks');
