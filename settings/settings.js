//Settings.js is not part of the repository.  However, it should be deployed with the application and contain deployment-specific settings.
//there is a settings.js.example file that should match the structure and properties of this file that IS checked in to the repo.
var settings = {}

settings.pg = {};
settings.application = {};
settings.tilestream = {};

//application port settings
settings.application.port = 3001;
//settings.application.ip = "localhost"; //Typically localhost.  If deploying on Amazon EC2 Ubuntu, comment out this line.

//SSL Settings - enable if you have specific SSL requirements
//settings.ssl = {};
//settings.ssl.pfx = 'mypfx.pfx';
//settings.ssl.password = 'foo';


//Settings for postgres DB
settings.pg.username = 'ofkyqimiccjxia';
settings.pg.password = 'c7ea1f6236955eb4a8db68b87b2aca87a0217f8f0e33eafb729f739e8938cbd6';
settings.pg.server = 'ec2-23-21-46-94.compute-1.amazonaws.com';
settings.pg.port = '5432';
settings.pg.database = 'dfosehdfs00dmc';
settings.pg.featureLimit = 1000; //how many features to return by default

//settings.otherSchemas = ['myschema']; //Optionally list postgres schemas other than 'public' to read

//Should the API display postgres views?
settings.displayViews = true;

//Should the API display postgres tables?
settings.displayTables = true;

//Should the API hide any postgres tables or views?
settings.pg.noFlyList = ["att_0"];

//The list of formats to be returned by the Table Query REST endpoint.  If ogr2ogr is installed, .shp will be added automatically.
settings.application.formatList =[ 'html', 'GeoJSON', 'esriJSON'];

//Where to write out GeoJSON files?
settings.application.geoJsonOutputFolder = "/public/geojson/output/";

//Optional.  If you're using port forwarding or URL rewriting, but need to display full URLs to your assets, this will stand in for the host.
settings.application.publichost = ""; //like myhost.com. Keep this empty if you want to use the default host
settings.application.publicport = "80";

//Epxress Session Secret
settings.epxressSessionSecret = "secret";

//MongoDB Authentication
settings.mongodb = {};
settings.mongodb.db = "mongodb://localhost/authentication";

//Facebook App ID
settings.facebook = {};
settings.facebook.appid = "12345";
settings.facebook.secret = "secret";


//Leaflet version reference
settings.leaflet = {};
settings.leaflet.js = 'https://unpkg.com/leaflet@1.0.3/dist/leaflet.js';
settings.leaflet.css = 'https://unpkg.com/leaflet@1.0.3/dist/leaflet.css';

settings.jquery = {};
settings.jquery.js = 'https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js';

// For middleware that checks the referrer header of incoming requests
settings.acceptableReferrers = [];
settings.referrerCheckHints = [];

module.exports = settings;
