Date.prototype.shortFormat=function(){
    return (this.getMonth()+1)+"/"+this.getDate()+"/"+this.getFullYear();
}

function Blog(body,date){
    this.body=body
    this.date=date
    Blog.prototype.signature="by Abhishek Kumar"

    Blog.prototype.toHTML=function(i){
        var blogText="";
        blogText+=i?"<p style='background-color:#EEEEEE'>":"<p>";
        blogText+="<strong>"+(this.date.shortFormat())+"</strong><br/>"+this.body+"</br><em style='font-size:12px'>"+this.signature+"</em></p>";

        return blogText;
    }

    Blog.prototype.searchText=function(text){
        return this.body.toLowerCase().indexOf(text.toLowerCase())!=-1;
    }


}

var firstBlog=new Blog('This is my first blog','01-01-2024');
var blogs=[
    new Blog('I got an new cube as my birthday present',new Date('01/02/2024')),
    new Blog('I got an new cube as my award',new Date('08/08/2016')),
    new Blog('I saw a new type of cube...',new Date('07/21/2019')),
    new Blog('I solved a 3*3 rubicks cube ',new Date('04/27/2019')),
    new Blog('I ordered a new cube ...',new Date('08/05/2020')),
    new Blog("Got the new cube I ordered. It's a real pearl.", new Date("08/14/2008")),
    new Blog("Solved the new cube but of course, now I'm bored and shopping for a new one.", new Date("08/19/2008")),
    new Blog("Managed to get a headache toiling over the new cube. Gotta nap.", new Date("08/16/2008")),
    new Blog("Found a 7x7x7 cube for sale online. Yikes! That one could be a beast.", new Date("08/21/2008")),
    new Blog("Met up with some fellow cubers to discuss the prospect of a 7x7x7 cube. Mixed feelings.", new Date("08/29/2008")),
    new Blog("Went ahead and ordered the scary 7x7x7 cube. Starting a mental exercise regimen to prepare.", new Date("09/01/2008")),
    new Blog("Attended a rally outside of a local toy store that stopped carrying cube puzzles. Power to the puzzlers!", new Date("09/03/2008"))
]

blogs.sort(function (blog1,blog2){
    return blog2.date-blog1.date;
})

function showBlog(numEntries){
    if(!numEntries){
        numEntries=blogs.length;
    }
    var i=0,blogText="";
    while(i<blogs.length && i<numEntries){
        blogText+=blogs[i].toHTML(i%2==0);
        i++;
    }
    document.getElementById('blog').innerHTML=blogText
}

function hideP(){
    document.getElementById('searchresult').style.visibility='hidden';
}

function searchBlog(){
    var text=document.getElementById('searchtext').value;
    var j=0;
    newBlog=[];
    for(var i=0;i<blogs.length;i++){
        if(blogs[i].searchText(text)){
            newBlog.push(blogs[i]);
        }
        j++;
    }
    // console.log(newBlog.length)
    if(j==0){
        alert('No such blog found!! SORRY');
        document.getElementById('searchresult').style.visibility="visible"
        document.getElementById('searchresult').innerHTML="<strong>"+0  +"</strong> result found"
        return;
    }else{
        var z=0,blogText="";
        while(z<newBlog.length){
            blogText+=newBlog[z].toHTML(z%2==0)
            z++;
        }
        
    }
    const num=newBlog.length
    document.getElementById('searchresult').style.visibility="visible"
    document.getElementById('searchresult').innerHTML="<strong>"+num+"</strong> result found"
    document.getElementById('blog').innerHTML=blogText
}

function randomBlog(){
    var i=Math.floor(Math.random()*blogs.length);
    
    var blogtext=blogs[i].toHTML(true)

    document.getElementById('searchresult').style.visibility="visible"
    document.getElementById('searchresult').innerHTML="Showing <strong>"+(i+1)+"</strong> blog"
    document.getElementById('blog').innerHTML=blogtext

}