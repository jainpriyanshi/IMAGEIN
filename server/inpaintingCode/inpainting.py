import sys
import numpy as npy
import matplotlib.pyplot as plt
import matplotlib.image as img

m = img.imread(sys.argv[1])
w, h = m.shape[:2]

new = npy.zeros([w, h, 3], dtype=int)
mask = npy.zeros([w, h, 3], dtype=int)

arr = npy.zeros([8, 3], dtype=int)
wt = npy.zeros([8, 3], dtype=float)

def gradient_r(x1, y1, xc, yc):
    if m[x1][y1][0] > m[xc][yc][0]:
        return m[x1][y1][0] - m[xc][yc][0]
    else:
        return m[xc][yc][0] - m[x1][y1][0]


def gradient_g(x1, y1, xc, yc):
    if m[x1][y1][1] > m[xc][yc][1]:
        return m[x1][y1][1] - m[xc][yc][1]
    else:
        return m[xc][yc][1] - m[x1][y1][1]


def gradient_b(x1, y1, xc, yc):
    if m[x1][y1][2] > m[xc][yc][2]:
        return m[x1][y1][2] - m[xc][yc][2]
    else:
        return m[xc][yc][2] - m[x1][y1][2]


def F(x, a):
    if a == 0:
        return 0
    if abs(x) <= (a / 2):
        return (1 - (x / a) ** 2)
    elif abs(x) <= a:
        return (x / a - 1) ** 2
    else:
        return 0


for i in range(w):
    for j in range(h):
        if i + j >= 120 and i + j <= 121:
            new[i][j] = 1
            mask[i][j] = 255
        else:
            new[i][j] = m[i][j]
            mask[i][j] = 1

plt.imshow((mask).astype(npy.uint8))
plt.show()

plt.imshow((new).astype(npy.uint8))
plt.show()

for i in range(w):
    for j in range(h):
        if mask[i][j][0] == 255 and mask[i][j][1] == 255 and mask[i][j][2] == 255:
            k = 0

            for ii in range(i - 1, i + 1):
                for jj in range(j - 1, j + 1):
                    if ii != i and jj != j:
                        arr[k][0] = gradient_r(ii, jj, i, j)
                        arr[k][1] = gradient_g(ii, jj, i, j)
                        arr[k][2] = gradient_b(ii, jj, i, j)
                        k = k + 1
            r = 0
            g = 0
            b = 0
            for k in range(8):
                r = r + arr[k][0]
                g = g + arr[k][1]
                b = b + arr[k][2]
            r /= 8
            g /= 8
            b /= 8
            #print({r, g, b});

            for ii in range(8):
                wt[ii][0] = F(arr[ii][0], r)
                wt[ii][1] = F(arr[ii][1], g)
                wt[ii][2] = F(arr[ii][2], b)

            fr = 0
            fg = 0
            fb = 0
            weightr = 0
            weightg = 0
            weightb = 0

            for _ in range(8):
                weightr += wt[_][0]
                weightg += wt[_][1]
                weightb += wt[_][2]

            fr = (1 - weightr) * m[i][j][0]
            fg = (1 - weightg) * m[i][j][0]
            fb = (1 - weightb) * m[i][j][0]

            k = 0

            for ii in range(i - 1, i + 1):
                for jj in range(j - 1, j + 1):
                    if ii != i and jj != j:
                        fr += wt[k][0] * m[ii][jj][0]
                        fg += wt[k][1] * m[ii][jj][1]
                        fb += wt[k][2] * m[ii][jj][2]
                        k = k + 1

            new[i][j][0] = int(fr)
            new[i][j][1] = int(fg)
            new[i][j][2] = int(fb)

for _ in range(20):
    for i in range(w):
        for j in range(h):
            if mask[i][j][0] == 255 and mask[i][j][1] == 255 and mask[i][j][2] == 255:
                new[i][j] = (new[i - 1][j - 1] + new[i - 1][j] + new[i - 1][j + 1] + new[i][j - 1]
                             + new[i][j + 1] + new[i + 1][j] + new[i + 1][j - 1] + new[i + 1][j - 1]) / 8
            else:
                new[i][j] = new[i][j]

plt.imshow((new).astype(npy.uint8))
plt.show()
