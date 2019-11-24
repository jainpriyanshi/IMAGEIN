import sys
import numpy as npy
import matplotlib.pyplot as plt
import matplotlib.image as img

m = img.imread(sys.argv[1])
w, h = m.shape[:2]

dmg11 = npy.zeros([8, 3], dtype=int)
mask1 = npy.zeros([8, 3], dtype=int)

for i in range(w):
    for j in range(h):
        if  i**2+j**2>200 and i**2+j**2<220:
            mask[i][j]=255
            new[i][j]=0