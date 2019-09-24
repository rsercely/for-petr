Browser("Salesforce Developers").Navigate "http://yopmail.com/" @@ hightlight id_;_852648_;_script infofile_;_ZIP::ssf24.xml_;_

Browser("YOPmail - Disposable Email").Page("YOPmail - Disposable Email").WebButton("Check Inbox").Check CheckPoint("Check Inbox") @@ script infofile_;_ZIP::ssf25.xml_;_
Browser("YOPmail - Disposable Email").Page("YOPmail - Disposable Email").WebEdit("login").Set DataTable("newUserName", dtGlobalSheet) @@ hightlight id_;_Browser("YOPmail - Disposable Email").Page("YOPmail - Disposable Email").WebEdit("login")_;_script infofile_;_ZIP::ssf1.xml_;_
wait 3 ' ran 50 iterations, and one time, the mail had not arrived in time. Hence the wait
Browser("YOPmail - Disposable Email").Page("YOPmail - Disposable Email").WebButton("Check Inbox").Click
Browser("YOPmail - Disposable Email").Page("YOPmail - Disposable Email").Frame("ifinbox").Link("mailFrom_developer@salesforce.com").Click @@ hightlight id_;_Browser("YOPmail - Disposable Email").Page("YOPmail - Disposable Email").Frame("ifinbox").Link("10:45developer@salesforce.comW")_;_script infofile_;_ZIP::ssf15.xml_;_
Browser("YOPmail - Disposable Email").Page("YOPmail - Disposable Email").Frame("ifmail_3").Link("Verify Account").Click @@ hightlight id_;_Browser("YOPmail - Disposable Email").Page("YOPmail - Disposable Email").Frame("ifmail 3").Link("Verify Account")_;_script infofile_;_ZIP::ssf16.xml_;_

Browser("Change Your Password |").Page("Change Your Password |").WebEdit("newpassword").Set     "Cloud_123" @@ hightlight id_;_Browser("Change Your Password |").Page("Change Your Password |").WebEdit("newpassword")_;_script infofile_;_ZIP::ssf17.xml_;_
Browser("Change Your Password |").Page("Change Your Password |").WebEdit("confirmpassword").Set "Cloud_123" @@ hightlight id_;_Browser("Change Your Password |").Page("Change Your Password |").WebEdit("confirmpassword")_;_script infofile_;_ZIP::ssf18.xml_;_
Browser("Change Your Password |").Page("Change Your Password |").WebEdit("answer").Set "Denver" @@ hightlight id_;_Browser("Change Your Password |").Page("Change Your Password |").WebEdit("answer")_;_script infofile_;_ZIP::ssf19.xml_;_
Browser("Change Your Password |").Page("Change Your Password |").WebButton("Change Password").Click @@ hightlight id_;_Browser("Change Your Password |").Page("Change Your Password |").WebButton("Change Password")_;_script infofile_;_ZIP::ssf20.xml_;_
OptionalStep.Browser("Change Your Password |").Page("Home Page ~ Salesforce").WebButton("No Thanks").Click @@ hightlight id_;_Browser("Change Your Password |").Page("Home Page ~ Salesforce").WebButton("No Thanks")_;_script infofile_;_ZIP::ssf21.xml_;_
