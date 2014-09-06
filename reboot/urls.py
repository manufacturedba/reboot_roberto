from django.conf.urls import patterns, url, include
from django.contrib import admin
from django.views import generic

from django.conf import settings
from django.conf.urls.static import static

from views.index import HomeView, EntryView, entries

admin.autodiscover()

urlpatterns = static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += patterns("",
    
    # Entries
    url(r'^entries/$', entries),
    
    url(r'^blog/', include('zinnia.urls')),
    
    # Comments
    url(r'^comments/', include('django.contrib.comments.urls')),
    
    # Admin URLs.
    url(r"^admin/", include(admin.site.urls)),
    
    # Entry page
    url(r'^entry/', EntryView.as_view()),
    
    # Homepage
    url(r'^$', HomeView.as_view()),
)
