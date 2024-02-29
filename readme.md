<h1>Parse National ID</h1>
<h2>Description:</h2>
<p>This library parses Egyptian national ID and extracts data from it.</p>
<h2>Usage:</h2> 
<h3>It takes one parameter (The ID) and return Data in an object in the case of ID is valid</h3>

for example :

* parseNationalId("30207072500379");
  
* Output : 
{
  birthDay: '07',
  birthMonth: '07',
  birthYear: '2002',
  birthOrder: '3',
  gender: 'ذكر',
  birthCity: 'اسيوط'
}

<h3>Note:</h3>
In the case of using an Invalid ID, the function will return Null

for example :

* parseNationalId("302070725003");
  
* Output : 
 Null


<h2>Contributing:</h2> 
<p>Contributions are welcome! Feel free to submit bug reports, feature requests, or pull requests to help improve this project.<p/>


<h2>License:</h2>
<a href='https://github.com/ahmedsaleh020/parse-national-id/blob/main/LICENSE.md'>MIT</a> License © <a href='https://github.com/ahmedsaleh020'>Ahmed Saleh</a>
