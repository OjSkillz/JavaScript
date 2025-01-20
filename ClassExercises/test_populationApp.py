from unittest import TestCase
import populationApp

class TestPopulationApp(TestCase):
    def test_that_app_exists(self):
        populationApp.get_population("USA", "California");
        
        
