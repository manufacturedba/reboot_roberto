from django.conf.urls import patterns, url, include
from django.contrib import admin
from django.views import generic

from django.conf import settings
from django.conf.urls.static import static

from views.index import HomeView, entries

admin.autodiscover()

urlpatterns = static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += patterns("",
    
    # Entries
    url(r'^entries/$', entries),
    
    # Comments
    url(r'^comments/', include('django.contrib.comments.urls')),
    
    # Admin URLs.
    url(r"^admin/", include(admin.site.urls)),
    
    # There's no favicon here!
    url(r"^favicon.ico$", generic.RedirectView.as_view()),
    
    # Homepage
    url(r'^$', HomeView.as_view()),
    
    # Entry page
    url(r'^entry/', HomeView.as_view()),
)
