use strict;
use warnings;
use Plack::Builder;

my $docroot = './public';

my $content = do {
    local $/ = undef;
    open my $fh, '<', "${docroot}/index.html" or die $!;
    <$fh>;
};

builder {
    enable 'Plack::Middleware::Static',
        path => qr{.*\.\w+$},
        root => $docroot;

    sub {
        [ 200, [ 'Content-Type' => 'text/html' ], [$content], ];
    };
}
