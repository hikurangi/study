# Copyright 2017 Amazon Web Services, Inc. or its affiliates. All rights
# reserved.

import unittest
import reservations_data_uploader
import warnings


class ReservationsDataUploaderTest(unittest.TestCase):

    def test_reservations_uploader(self):
        warnings.simplefilter("ignore", ResourceWarning)
        numFailures = reservations_data_uploader.load_reservations_data()
        self.assertEqual(0, numFailures)

if __name__ == '__main__':
    unittest.main()
