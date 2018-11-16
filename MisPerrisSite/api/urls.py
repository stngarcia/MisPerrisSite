from django.conf import urls
from . import views

urlpatterns = [
    url(r'^$', views.MascotaView.as_view=)
]