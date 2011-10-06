//log(emails);

var cats = { "Spot": true };

function process_emails() {
    for (var i = 0; i < emails.length; i++) {
        if (starts_with(emails[i], "born")) {
            var cat_names = get_cat_names(emails[i]);
            for (var j = 0; j < cat_names.length; j++) {
                cats[cat_names[j]] = true;
            }
        }
    }
}

function get_cat_names(text) {
    var name_text = text.slice(text.indexOf(":") + 1, text.length);
    var names = name_text.split(",");
    for (var i = 0; i < names.length; i++) {
        trim_left(names[i]);
    }
    return names;
}

function log_cats() {
    for (var cat in cats) {
        log(cat);
    }
}

process_emails();
log_cats();