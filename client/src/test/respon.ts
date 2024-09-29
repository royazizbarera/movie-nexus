const ex = {
  "code": 200,
  "message": "Movie fetched successfully",
  "data": {
      "id": 1,
      "title": "Inception",
      "synopsis": "A skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state.",
      "posterUrl": "https://picsum.photos/seed/movies/1080/1920",
      "releaseDate": "2010-07-16T00:00:00.000Z",
      "approvalStatus": true,
      "rating": 8.8,
      "countryCode": "US",
      "directorId": 1,
      "country": {
          "code": "US",
          "label": "United States",
          "phone": "1"
      },
      "director": {
          "id": 1,
          "name": "Tom Hanks",
          "birthDate": "1956-07-09T00:00:00.000Z",
          "countryCode": "US"
      },
      "genres": [
          {
              "id": 1,
              "name": "Action"
          },
          {
              "id": 4,
              "name": "Drama"
          },
          {
              "id": 6,
              "name": "Horror"
          },
          {
              "id": 9,
              "name": "Sci-Fi"
          },
          {
              "id": 13,
              "name": "Biography"
          },
          {
              "id": 17,
              "name": "History"
          },
          {
              "id": 19,
              "name": "Musical"
          },
          {
              "id": 20,
              "name": "Sport"
          },
          {
              "id": 22,
              "name": "Adult"
          }
      ],
      "actors": [
          {
              "id": 1,
              "name": "Tom Hanks",
              "birthDate": "1956-07-09T00:00:00.000Z",
              "countryCode": "US",
              "country": {
                  "code": "US",
                  "label": "United States",
                  "phone": "1"
              }
          },
          {
              "id": 5,
              "name": "Brad Pitt",
              "birthDate": "1963-12-18T00:00:00.000Z",
              "countryCode": "US",
              "country": {
                  "code": "US",
                  "label": "United States",
                  "phone": "1"
              }
          },
          {
              "id": 7,
              "name": "Johnny Depp",
              "birthDate": "1963-06-09T00:00:00.000Z",
              "countryCode": "US",
              "country": {
                  "code": "US",
                  "label": "United States",
                  "phone": "1"
              }
          },
          {
              "id": 8,
              "name": "Denzel Washington",
              "birthDate": "1954-12-28T00:00:00.000Z",
              "countryCode": "US",
              "country": {
                  "code": "US",
                  "label": "United States",
                  "phone": "1"
              }
          },
          {
              "id": 13,
              "name": "Nicole Kidman",
              "birthDate": "1967-06-20T00:00:00.000Z",
              "countryCode": "AU",
              "country": {
                  "code": "AU",
                  "label": "Australia",
                  "phone": "61"
              }
          },
          {
              "id": 18,
              "name": "Emma Thompson",
              "birthDate": "1959-04-15T00:00:00.000Z",
              "countryCode": "AZ",
              "country": {
                  "code": "AZ",
                  "label": "Azerbaijan",
                  "phone": "994"
              }
          },
          {
              "id": 19,
              "name": "Keira Knightley",
              "birthDate": "1985-03-26T00:00:00.000Z",
              "countryCode": "AZ",
              "country": {
                  "code": "AZ",
                  "label": "Azerbaijan",
                  "phone": "994"
              }
          },
          {
              "id": 21,
              "name": "Julia Roberts",
              "birthDate": "1967-10-28T00:00:00.000Z",
              "countryCode": "US",
              "country": {
                  "code": "US",
                  "label": "United States",
                  "phone": "1"
              }
          },
          {
              "id": 22,
              "name": "Sandra Bullock",
              "birthDate": "1964-07-26T00:00:00.000Z",
              "countryCode": "US",
              "country": {
                  "code": "US",
                  "label": "United States",
                  "phone": "1"
              }
          },
          {
              "id": 23,
              "name": "Scarlett Johansson",
              "birthDate": "1984-11-22T00:00:00.000Z",
              "countryCode": "US",
              "country": {
                  "code": "US",
                  "label": "United States",
                  "phone": "1"
              }
          }
      ],
      "awards": [
          {
              "id": 6,
              "name": "Best Supporting Actress",
              "year": "1970-01-01T00:00:02.020Z",
              "countryCode": "KR"
          },
          {
              "id": 7,
              "name": "Best Original Screenplay",
              "year": "1970-01-01T00:00:02.020Z",
              "countryCode": "KR"
          },
          {
              "id": 10,
              "name": "Best International Feature",
              "year": "1970-01-01T00:00:02.020Z",
              "countryCode": "US"
          },
          {
              "id": 13,
              "name": "Best Original Song",
              "year": "1970-01-01T00:00:02.020Z",
              "countryCode": "US"
          },
          {
              "id": 18,
              "name": "Best Makeup and Hairstyling",
              "year": "1970-01-01T00:00:02.020Z",
              "countryCode": "JP"
          },
          {
              "id": 19,
              "name": "Best Costume Design",
              "year": "1970-01-01T00:00:02.020Z",
              "countryCode": "JP"
          },
          {
              "id": 22,
              "name": "Best Animated Short",
              "year": "1970-01-01T00:00:02.020Z",
              "countryCode": "US"
          },
          {
              "id": 23,
              "name": "Best Documentary Short",
              "year": "1970-01-01T00:00:02.020Z",
              "countryCode": "US"
          }
      ],
      "reviews": []
  },
  "version": 1
}


const search = {
  "code": 200,
  "message": "Movie searched successfully",
  "data": [ {
          "id": 1,
          "title": "Inception",
          "synopsis": "A skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state.",
          "posterUrl": "https://picsum.photos/seed/movies/1080/1920",
          "releaseDate": "2010-07-16T00:00:00.000Z",
          "approvalStatus": true,
          "rating": 8.8,
          "countryCode": "US",
          "directorId": 1,
          "country": {
              "code": "US",
              "label": "United States",
              "phone": "1"
          },
          "director": {
              "id": 1,
              "name": "Tom Hanks",
              "birthDate": "1956-07-09T00:00:00.000Z",
              "countryCode": "US"
          },
          "genres": [
              {
                  "id": 1,
                  "name": "Action"
              },
              {
                  "id": 4,
                  "name": "Drama"
              },
              {
                  "id": 6,
                  "name": "Horror"
              },
              {
                  "id": 9,
                  "name": "Sci-Fi"
              },
              {
                  "id": 13,
                  "name": "Biography"
              },
              {
                  "id": 17,
                  "name": "History"
              },
              {
                  "id": 19,
                  "name": "Musical"
              },
              {
                  "id": 20,
                  "name": "Sport"
              },
              {
                  "id": 22,
                  "name": "Adult"
              }
          ],
          "actors": [
              {
                  "id": 1,
                  "name": "Tom Hanks",
                  "birthDate": "1956-07-09T00:00:00.000Z",
                  "countryCode": "US",
                  "country": {
                      "code": "US",
                      "label": "United States",
                      "phone": "1"
                  }
              },
              {
                  "id": 5,
                  "name": "Brad Pitt",
                  "birthDate": "1963-12-18T00:00:00.000Z",
                  "countryCode": "US",
                  "country": {
                      "code": "US",
                      "label": "United States",
                      "phone": "1"
                  }
              },
              {
                  "id": 7,
                  "name": "Johnny Depp",
                  "birthDate": "1963-06-09T00:00:00.000Z",
                  "countryCode": "US",
                  "country": {
                      "code": "US",
                      "label": "United States",
                      "phone": "1"
                  }
              },
              {
                  "id": 8,
                  "name": "Denzel Washington",
                  "birthDate": "1954-12-28T00:00:00.000Z",
                  "countryCode": "US",
                  "country": {
                      "code": "US",
                      "label": "United States",
                      "phone": "1"
                  }
              },
              {
                  "id": 13,
                  "name": "Nicole Kidman",
                  "birthDate": "1967-06-20T00:00:00.000Z",
                  "countryCode": "AU",
                  "country": {
                      "code": "AU",
                      "label": "Australia",
                      "phone": "61"
                  }
              },
              {
                  "id": 18,
                  "name": "Emma Thompson",
                  "birthDate": "1959-04-15T00:00:00.000Z",
                  "countryCode": "AZ",
                  "country": {
                      "code": "AZ",
                      "label": "Azerbaijan",
                      "phone": "994"
                  }
              },
              {
                  "id": 19,
                  "name": "Keira Knightley",
                  "birthDate": "1985-03-26T00:00:00.000Z",
                  "countryCode": "AZ",
                  "country": {
                      "code": "AZ",
                      "label": "Azerbaijan",
                      "phone": "994"
                  }
              },
              {
                  "id": 21,
                  "name": "Julia Roberts",
                  "birthDate": "1967-10-28T00:00:00.000Z",
                  "countryCode": "US",
                  "country": {
                      "code": "US",
                      "label": "United States",
                      "phone": "1"
                  }
              },
              {
                  "id": 22,
                  "name": "Sandra Bullock",
                  "birthDate": "1964-07-26T00:00:00.000Z",
                  "countryCode": "US",
                  "country": {
                      "code": "US",
                      "label": "United States",
                      "phone": "1"
                  }
              },
              {
                  "id": 23,
                  "name": "Scarlett Johansson",
                  "birthDate": "1984-11-22T00:00:00.000Z",
                  "countryCode": "US",
                  "country": {
                      "code": "US",
                      "label": "United States",
                      "phone": "1"
                  }
              }
          ],
          "awards": [
              {
                  "id": 6,
                  "name": "Best Supporting Actress",
                  "year": "1970-01-01T00:00:02.020Z",
                  "countryCode": "KR"
              },
              {
                  "id": 7,
                  "name": "Best Original Screenplay",
                  "year": "1970-01-01T00:00:02.020Z",
                  "countryCode": "KR"
              },
              {
                  "id": 10,
                  "name": "Best International Feature",
                  "year": "1970-01-01T00:00:02.020Z",
                  "countryCode": "US"
              },
              {
                  "id": 13,
                  "name": "Best Original Song",
                  "year": "1970-01-01T00:00:02.020Z",
                  "countryCode": "US"
              },
              {
                  "id": 18,
                  "name": "Best Makeup and Hairstyling",
                  "year": "1970-01-01T00:00:02.020Z",
                  "countryCode": "JP"
              },
              {
                  "id": 19,
                  "name": "Best Costume Design",
                  "year": "1970-01-01T00:00:02.020Z",
                  "countryCode": "JP"
              },
              {
                  "id": 22,
                  "name": "Best Animated Short",
                  "year": "1970-01-01T00:00:02.020Z",
                  "countryCode": "US"
              },
              {
                  "id": 23,
                  "name": "Best Documentary Short",
                  "year": "1970-01-01T00:00:02.020Z",
                  "countryCode": "US"
              }
          ],
          "reviews": []
      }
  ],
  "version": 1
}


export { ex, search }