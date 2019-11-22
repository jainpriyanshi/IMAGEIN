import sys
import numpy as npy
import matplotlib.pyplot as plt
import matplotlib.image as img
from statistics import mean

m = img.imread(sys.argv[1])
w, h = m.shape[:2]

plt.imshow((m).astype(npy.uint8))
plt.show()

new = npy.zeros([w, h, 3], dtype=int)


for i in range(w):
    for j in range(h):
        new[i][j]=m[i][j]

for i in range(1,w-1):
    for j in range(1,h-1):
            new[i][j] = (new[i - 1][j - 1] + new[i - 1][j] + new[i - 1][j + 1] + new[i][j - 1]
                             + new[i][j + 1] + new[i + 1][j] + new[i + 1][j - 1] + new[i + 1][j - 1]) / 8

plt.imshow((new).astype(npy.uint8))
plt.show()