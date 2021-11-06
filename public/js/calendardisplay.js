var timezone = jstz.determine();
var pref =
  '<iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=';
var suff =
  '&amp;src=dmY4Y2N1Zm12MHRrcGNmdGh1dmo3azNqY29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23D50000" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"></iframe>';
var iframe_html = pref + timezone.name() + suff;
document.getElementById("calendardisplay").innerHTML = iframe_html;
