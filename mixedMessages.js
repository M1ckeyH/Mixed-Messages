//Objects that store name of a philosopher and his quotes.
let plato = {
    name: 'Plato',
    quotes: ['Only the dead have seen the end of war.',
    'The heaviest penalty for declining to rule is to be ruled by someone inferior to yourself.',
    'I am the wisest man alive, for I know one thing, and that is that I know nothing.',
    'Never discourage anyone...who continually makes progress, no matter how slow.',
    'Ignorance, the root and stem of every evil.',
    'Love is a serious mental disease.']
};
let sokrates = {
    name: 'Sokrates',
    quotes: ['Employ your time in improving yourself by other men’s writings so that you shall come easily by what others have labored hard for.',
    'The beginning of wisdom is a definition of terms.',
    'What a lot of things there are a man can do without.',
    'I cannot teach anybody anything. I can only make them think.',
    'Slanderers do not hurt me because they do not hit me.',
    'He who is not contented with what he has, would not be contented with what he would like to have.']
};
let sunTzu = {
    name: 'Sun Tzu',
    quotes: ['In the midst of chaos, there is also opportunity',
    'The greatest victory is that which requires no battle.',
    'Even the finest sword plunged into salt water will eventually rust.',
    'When you surround an army, leave an outlet free. Do not press a desperate foe too hard.',
    'When the enemy is relaxed, make them toil. When full, starve them. When settled, make them move.',
    'So in war, the way is to avoid what is strong, and strike at what is weak.']
};
let voltair = {
    name: 'Voltair',
    quotes: ['Life is a shipwreck, but we must not forget to sing in the lifeboats.',
    'The more I read, the more I acquire, the more certain I am that I know nothing.',
    'Common sense is not so common.',
    'God is a comedian playing to an audience that is too afraid to laugh.',
    'The most important decision you make is to be in a good mood.',
    'Doubt is an uncomfortable condition, but certainty is a ridiculous one.']
};
let deSade = {
    name: 'Maqruise De Sade',
    quotes: ['The man who alters his way of thinking to suit others is a fool.',
    'Social order at the expense of liberty is hardly a bargain.',
    'I don\'t know what the heart is, not I: I only use the word to denote the mind\'s frailties.',
    'Religions are the cradles of despotism.',
    'True happiness lies in the senses, and virtue gratifies none of them.',
    'Happiness is an abstraction, it is a product of the imagination, it is a way of being moved, which depends entirely on our way of seeing and feeling.']
};
function wisdom () {
    const rnd = Math.floor(Math.random()*5);  //random selector of a quote
    let message = '';                          //temporrary quote storage
    let who = '';                              //temporary name of  a philosopher storage
switch(Math.floor(Math.random()*4)) {          //switch case that initiates random number to select philosopher
case 0:
   message = plato.quotes[rnd];                 
   who = plato.name;
    break;
case 1:
   message = sokrates.quotes[rnd];
   who = sokrates.name;
    break;
case 2:
    messages = sunTzu.quotes[rnd];
    who = sunTzu.name;
    break;
case 3:
    message = voltair.quotes[rnd];
    who = voltair.name;
    break;
case 4:
    message = deSade.quotes[rnd];
    who = deSade.name;
    break;
}
console.log(message + ' --' + who)          //combines message together and displays it.
}
wisdom()
