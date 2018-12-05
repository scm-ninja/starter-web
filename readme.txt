- XAMPP Version: 5.6.3
-- PHP Version: 5.6.3

##### ApacheFriends XAMPP Version 5.6.3 ######

Important! PHP in this package needs the Microsoft Visual C++ 2008 Redistributable package from
http://www.microsoft.com/en-us/download/details.aspx?id=5582. Please ensure that the VC++ 2008 runtime
libraries are installed on your system.    

  + Apache 2.4.4
  + MySQL 5.5.32 (Community Server)
  + PHP 5.6.3 (VC11 X86 32bit thread safe) + PEAR 
  + phpMyAdmin 4.0.4
  + OpenSSL 1.0.1i
  + ADOdb 5.18
  + Mercury Mail Transport System v4.62 (not included in the portable version)
  + FileZilla FTP Server 0.9.41 (not included in the portable version)
  + Webalizer 2.23-04 (not included in the portable version) 
  + Strawberry Perl 5.16.1.1 Portable
  + Tomcat 7.0.41
  + XAMPP Control Panel Version 3.2.1 by hackattack142 (Great Thanks!!))
    See: http://www.apachefriends.org/f/viewtopic.php?f=16&t=46743
  + XAMPP Security
  + XAMPP mailToDisk 1.0 (write emails via PHP on local disk in <xampp>\mailoutput. Activated in the php.ini as mail default.)

--------------------------------------------------------------- 

* System Requirements:
 
  + 64 MB RAM (RECOMMENDED)
  + 750 MB free fixed disk 
  + Windows 2003, XP (RECOMMENDED), VISTA, Windows 7

---------------------------------------------------------------

* ATTENTION!!!!

For trouble with the mysql connection (via mysqlnd API in php) see also the startpage: 
http://localhost/xampp/index.php

* QUICK INSTALLATION:

[NOTE: Unpack the package to your USB stick or a partition of your choice.
There it must be on the highest level like E:\ or W:\. It will 
build E:\xampp or W:\xampp or something like this. Please do not use the "setup_xampp.bat" for an USB stick installation!]   

Step 1: Unpack the package into a directory of your choice. Please start the 
"setup_xampp.bat" and beginning the installation. Note: XAMPP makes no entries in the windows registry and no settings for the system variables.

Step 2: If installation ends successfully, start the Apache 2 with 
"apache_start".bat", MySQL with "mysql_start".bat". Stop the MySQL Server with "mysql_stop.bat". For shutdown the Apache HTTPD, only close the Apache Command (CMD). Or use the fine XAMPP Control Panel with double-click on "xampp-control.exe"! 

Step 3: Start your browser and type http://127.0.0.1 or http://localhost in the location bar. You should see our pre-made
start page with certain examples and test screens.

Step 4: PHP (with mod_php, as *.php, *.php3, *.php4, *.php5, *.phtml), Perl by default with *.cgi, SSI with *.shtml are all located in => C:\xampp\htdocs\.
Examples:
- C:\xampp\htdocs\test.php => http://localhost/test.php
- C:\xampp\htdocs\myhome\test.php => http://localhost/myhome/test.php

Step 5: XAMPP UNINSTALL? Simply remove the "xampp" Directory.
But before please shutdown the apache and mysql.

---------------------------------------------------------------

* PHP MAIL FUNCTION:

There are three ways to work with the PHP Mail function.

1) With XAMPP mailToDisk every mail sending via the PHP mail() function will written in the <xampp>\mailoutput folder. MailToDisk is the default you do not have to change the php.ini. And please do not use mailToDisk for production! 
2) With fakemail (sendmail.exe) you will send all mail() to your personal mail account. Therefore you have to edit the <xampp>\sendmail\sendmail.ini first. Then please activate fakemail (sendamil.exe) in the php.ini and comment out the mailToDisk line.       
3) You can use a SMTP Server like the Mercury Mail Server alternate. Therefore comment out all sendmail_path lines in the php.ini. Now use the -> SMTP = localhost und -> smtp_port = 25 lines of course with your values in the php.ini.    

Attention : If XAMPP is installed in a base directory with spaces (e.g. c:\program files\xampp) fakemail and mailtodisk do not work correctly. In this case please copy the sendmail or mailtodisk folder in your root folder (e.g. C:\sendmail) and use this for sendmail_path.

---------------------------------------------------------------

* PASSWORDS:

1) MySQL:

   User: root
   Password:
   (means no password!)

2) FileZilla FTP:

   [ You have to create a new user on the FileZilla Interface ] 

3) Mercury: 

   Postmaster: postmaster (postmaster@localhost)
   Administrator: Admin (admin@localhost)

   TestUser: newuser  
   Password: wampp

4) WEBDAV:

   User: xampp-dav-unsecure
   Password: ppmax2011 
   
---------------------------------------------------------------

* ONLY FOR NT SYSTEMS! (NT4 | Windows 2000 | Windows XP):

- \xampp\apache\apache_installservice.bat 
  ===> Install Apache 2 as service

- \xampp\apache\apache_uninstallservice.bat 
  ===> Uninstall Apache 2 as service

- \xampp\mysql\mysql_installservice.bat 
  ===> Install MySQL as service

- \xampp\mysql\mysql_uninstallservice.bat 
  ===> Uninstall MySQL as service

==> After all un- / installations of services, better restart system!

----------------------------------------------------------------

A matter of security (A MUST READ!)

As mentioned before, XAMPP is not meant for production use but only for developers in a development environment. The way XAMPP is configured is to be open as possible and allowing the developer anything he/she wants. For development environments this is great but in a production environment it could be fatal. Here a list of missing security 
in XAMPP:

- The MySQL administrator (root) has no password.
- The MySQL daemon is accessible via network.
- phpMyAdmin is accessible via network.
- Examples are accessible via network.

To fix most of the security weaknesses simply call the following URL:

	http://localhost/security/

The root password for MySQL and phpMyAdmin, and also a XAMPP directory protection can being established here.

* NOTE: Some example sites can only access by the local systems, means over localhost. 

---------------------------------------------------------------

* MYSQL NOTES:

(1) The MySQL server can be started by double-clicking (executing) mysql_start.bat. This file can be found in the same folder you installed XAMPP in, most likely this will be C:\xampp\.
The exact path to this file is X:\xampp\mysql_start.bat, where "X" indicates the letter of the drive you unpacked XAMPP into. This batch file starts the MySQL server in console mode. The first intialization might take a few minutes.
Do not close the DOS window or you'll crash the server! To stop the server, please use mysql_stop.bat, which is located in the same directory. Or use the fine XAMPP Control Panel with double-click on "xampp-control.exe" for all these things! 

(2) To use MySQL as Service for NT / 2000 / XP, simply copy the "my.ini" file to "C:\my.ini". Please note that this file has to be placed in C:\ (root), other locations are not permitted. Then execute the "mysql_installservice.bat" in the mysql folder.

(3) MySQL starts with standard values for the user id and the password. The preset user id is "root", the password is "" (= no password). To access MySQL via PHP with the preset values, you'll have to use the following syntax:

	mysql_connect("localhost", "root", "");

If you want to set a password for MySQL access, please use of MySQL Admin.
To set the passwort "secret" for the user "root", type the following:

	C:\xampp\mysql\bin\mysqladmin.exe -u root -p secret
    
After changing the password you'll have to reconfigure phpMyAdmin to use the new password, otherwise it won't be able to access the databases. To do that, open the file config.inc.php in \xampp\phpmyadmin\ and edit the following lines:

	$cfg['Servers'][$i]['user']            = 'root';   // MySQL User
	$cfg['Servers'][$i]['auth_type']       = 'http';   // HTTP authentification

So first the 'root' password is queried by the MySQL server, before phpMyAdmin may access.
  	    	
---------------------------------------------------------------    

		Have a lot of fun! | Viel Spaﬂ! | Bonne Chance!
