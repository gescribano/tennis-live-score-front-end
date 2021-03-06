# First, require any additional compass plugins installed on your system.
# require 'breakpoint'

# Toggle this between :development and :production when deploying the CSS to the
# live server. Development mode will retain comments and spacing from the
# original Sass source and adds line numbering comments for easier debugging.
environment = :development
# environment = :production

# In development, we can turn on the FireSass-compatible debug_info.
firesass = true

# Location of the your project's resources.
css_dir         = "assets/css"
sass_dir        = "assets/scss"
extensions_dir  = "sass-extensions"
images_dir      = "assets/img"
javascripts_dir = "assets/js"

# Set this to the root of your project. All resource locations above are
# considered to be relative to this path.
# http_path = "/"

# To use relative paths to assets in your compiled CSS files, set this to true.
relative_assets = true

##
## You probably don't need to edit anything below this.
##

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed
output_style = (environment == :development) ? :expanded : :compressed

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false

# Pass options to sass. For development, we turn on the FireSass-compatible
# debug_info if the firesass config variable above is true.
sass_options = (environment == :development && firesass == true) ? {:debug_info => true} : {}
