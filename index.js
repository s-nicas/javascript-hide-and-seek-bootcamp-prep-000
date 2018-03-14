document.querySelector('');

function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(target){
return document.querySelector('div') ;
}

function increaseRankBy(n){
      const rankedLists = document.getElementById('app').querySelectorAll('ul.ranked-list')
      for(var i =0; i<rankedLists.length; i++){
        rankedLists[i].innerHTML = parseInt(i+ n)
      }
}      

function deepestChild(){
  var results = document.getElementById('grand-node').querySelectorAll('div');
   
  for(var key in results){
   return Object.keys(results).length
    
  }
  
}
