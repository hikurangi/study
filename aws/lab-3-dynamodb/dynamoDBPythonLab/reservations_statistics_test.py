# Copyright 2017 Amazon Web Services, Inc. or its affiliates. All rights
# reserved.

import unittest
import reservations_statistics
import warnings


class ReservationsStatisticsTest(unittest.TestCase):

    def test_reservations_statistics(self):
        warnings.simplefilter("ignore", ResourceWarning)
        itemCount = reservations_statistics.query_by_city("Reno")
        self.assertEqual(178, itemCount)

if __name__ == '__main__':
    unittest.main()
