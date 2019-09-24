' ensure a clean environment every iteration
'SystemUtil.CloseProcessByName "iexplore.exe"
'SystemUtil.Run "iexplore.exe","https://developer.salesforce.com"
RunningChrome = true
SystemUtil.CloseProcessByName "chrome.exe"
SystemUtil.Run "chrome.exe","https://developer.salesforce.com"

if Browser("Salesforce Developers").Page("Salesforce Developers").Link("Sign Up").exist(30) then
	wait 3
	Browser("Salesforce Developers").Page("Salesforce Developers").Link("Sign Up").Click
End If

Browser("Salesforce Developers").Page("Salesforce Developers_2").WebEdit("user[first_name]").Set DataTable("fName", dtGlobalSheet) @@ hightlight id_;_Browser("Salesforce Developers").Page("Salesforce Developers 2").WebEdit("user[first name]")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("Salesforce Developers").Page("Salesforce Developers_2").WebEdit("user[last_name]").Set DataTable("lName", dtGlobalSheet) @@ hightlight id_;_Browser("Salesforce Developers").Page("Salesforce Developers 2").WebEdit("user[last name]")_;_script infofile_;_ZIP::ssf3.xml_;_
Browser("Salesforce Developers").Page("Salesforce Developers_2").WebEdit("user[email]").Set DataTable("newEmail", dtGlobalSheet) @@ hightlight id_;_Browser("Salesforce Developers").Page("Salesforce Developers 2").WebEdit("user[email]")_;_script infofile_;_ZIP::ssf4.xml_;_

Browser("Salesforce Developers").Page("Salesforce Developers_2").WebList("user[job_role]").Select "Developer" @@ hightlight id_;_Browser("Salesforce Developers").Page("Salesforce Developers 2").WebList("user[job role]")_;_script infofile_;_ZIP::ssf5.xml_;_
Browser("Salesforce Developers").Page("Salesforce Developers_2").WebEdit("user[company]").Set "MyFirstCompany" @@ hightlight id_;_Browser("Salesforce Developers").Page("Salesforce Developers 2").WebEdit("user[company]")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("Salesforce Developers").Page("Salesforce Developers_2").WebList("user[country]").Select "United States" @@ hightlight id_;_Browser("Salesforce Developers").Page("Salesforce Developers 2").WebList("user[country]")_;_script infofile_;_ZIP::ssf8.xml_;_
Browser("Salesforce Developers").Page("Salesforce Developers_2").WebEdit("user[postal_code]").Set "80903" @@ hightlight id_;_Browser("Salesforce Developers").Page("Salesforce Developers 2").WebEdit("user[postal code]")_;_script infofile_;_ZIP::ssf9.xml_;_
Browser("Salesforce Developers").Page("Salesforce Developers_2").WebEdit("user[username]").Set DataTable("newEmail", dtGlobalSheet) @@ hightlight id_;_Browser("Salesforce Developers").Page("Salesforce Developers 2").WebEdit("user[email]")_;_script infofile_;_ZIP::ssf4.xml_;_
Browser("Salesforce Developers").Page("Salesforce Developers_2").WebEdit("user[username]").Submit @@ hightlight id_;_Browser("Salesforce Developers").Page("Salesforce Developers 2").WebEdit("user[username]")_;_script infofile_;_ZIP::ssf11.xml_;_
'Browser("Salesforce Developers").Page("Salesforce Developers_2").WebButton("Sign me up >").Click @@ script infofile_;_ZIP::ssf12.xml_;_
Browser("Salesforce Developers").Page("Salesforce Developers_2").WebElement("By registering, you confirm").Click @@ hightlight id_;_Browser("Salesforce Developers").Page("Salesforce Developers 2").WebElement("By registering, you confirm")_;_script infofile_;_ZIP::ssf13.xml_;_
Browser("Salesforce Developers").Page("Salesforce Developers_2").WebCheckBox("eula").Set "ON" @@ hightlight id_;_Browser("Salesforce Developers").Page("Salesforce Developers 2").WebCheckBox("eula")_;_script infofile_;_ZIP::ssf14.xml_;_
Browser("Salesforce Developers").Page("Salesforce Developers_2").WebButton("Sign me up >").Click @@ script infofile_;_ZIP::ssf15.xml_;_

if Browser("Salesforce Developers").Page("Salesforce Developers_2").WebElement("You are already using").Exist(10) then
	reporter.ReportEvent micFail, "Bad email", ">" & DataTable("newEmail", dtGlobalSheet) & "< is already registered at SalesForce"	
	exittest
End If



