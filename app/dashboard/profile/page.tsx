"use client";

import { useState, useEffect } from "react";
import { 
  User, 
  Lock, 
  Mail, 
  Shield, 
  CheckCircle, 
  AlertCircle,
  Loader2
} from "lucide-react";
import { QRCodeSVG } from 'qrcode.react';
import { toast } from "sonner";

interface ProfileSection {
  id: string;
  title: string;
  description: string;
  icon: any;
}

export default function ProfilePage() {
  const [currentUser, setCurrentUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    emailVerified: false,
    twoFactorEnabled: false,
  });
  
  const [loading, setLoading] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [twoFactorCode, setTwoFactorCode] = useState("");
  
  // Add loading states
  const [isUpdatingProfile, setIsUpdatingProfile] = useState(false);
  const [isEnabling2FA, setIsEnabling2FA] = useState(false);
  const [isVerifying2FA, setIsVerifying2FA] = useState(false);
  const [qrCodeData, setQrCodeData] = useState("");

  const sections: ProfileSection[] = [
    {
      id: "personal",
      title: "Personal Information",
      description: "Update your personal details and email",
      icon: User,
    },
    {
      id: "security",
      title: "Security",
      description: "Manage your password and 2FA settings",
      icon: Lock,
    },
    {
      id: "email",
      title: "Email Verification",
      description: "Verify your email address",
      icon: Mail,
    },
  ];

  // Add effect to fetch user data
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("/api/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        if (response.ok) {
          const data = await response.json();
          setCurrentUser(data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdatingProfile(true);

    try {
      const token = localStorage.getItem("token");
      const response = await fetch("/api/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: currentUser.name,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }

      toast.success("Profile updated successfully");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile");
    } finally {
      setIsUpdatingProfile(false);
    }
  };

  const handleEnable2FA = async () => {
    setIsEnabling2FA(true);

    try {
      const token = localStorage.getItem("token");
      const response = await fetch("/api/user/2fa/setup", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to setup 2FA");
      }

      const data = await response.json();
      setQrCodeData(data.qrCode);
      setShowQR(true);
      toast.success("2FA setup initiated");
    } catch (error) {
      console.error("Error setting up 2FA:", error);
      toast.error("Failed to setup 2FA");
    } finally {
      setIsEnabling2FA(false);
    }
  };

  const handleVerify2FA = async () => {
    setIsVerifying2FA(true);

    try {
      const token = localStorage.getItem("token");
      const response = await fetch("/api/user/2fa/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          code: twoFactorCode,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to verify 2FA");
      }

      setCurrentUser(prev => ({ ...prev, twoFactorEnabled: true }));
      setShowQR(false);
      setTwoFactorCode("");
      toast.success("2FA enabled successfully");
    } catch (error) {
      console.error("Error verifying 2FA:", error);
      toast.error("Failed to verify 2FA code");
    } finally {
      setIsVerifying2FA(false);
    }
  };

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-white mb-8">Profile Settings</h1>

        <div className="space-y-6">
          {/* Personal Information */}
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-2 bg-emerald-500/10 rounded-lg">
                <User className="w-5 h-5 text-emerald-500" />
              </div>
              <div>
                <h2 className="text-lg font-medium text-white">Personal Information</h2>
                <p className="text-sm text-zinc-400">Update your personal details</p>
              </div>
            </div>

            <form onSubmit={handleUpdateProfile} className="space-y-4">
              <div>
                <label className="block text-sm text-zinc-400 mb-2">Full Name</label>
                <input
                  type="text"
                  value={currentUser.name}
                  onChange={(e) => setCurrentUser({ ...currentUser, name: e.target.value })}
                  className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white"
                />
              </div>
              <button
                type="submit"
                disabled={isUpdatingProfile}
                className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50"
              >
                {isUpdatingProfile ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  "Update Profile"
                )}
              </button>
            </form>
          </div>

          {/* Security Settings */}
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-2 bg-emerald-500/10 rounded-lg">
                <Shield className="w-5 h-5 text-emerald-500" />
              </div>
              <div>
                <h2 className="text-lg font-medium text-white">Two-Factor Authentication</h2>
                <p className="text-sm text-zinc-400">Add an extra layer of security</p>
              </div>
            </div>

            {!currentUser.twoFactorEnabled ? (
              <div className="space-y-4">
                {showQR ? (
                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-lg inline-block">
                      <QRCodeSVG value={qrCodeData || "placeholder"} />
                    </div>
                    <div className="space-y-2">
                      <input
                        type="text"
                        value={twoFactorCode}
                        onChange={(e) => setTwoFactorCode(e.target.value)}
                        placeholder="Enter verification code"
                        className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white"
                      />
                      <button
                        onClick={handleVerify2FA}
                        disabled={isVerifying2FA}
                        className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50"
                      >
                        Verify Code
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={handleEnable2FA}
                    disabled={isEnabling2FA}
                    className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50"
                  >
                    Enable 2FA
                  </button>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2 text-emerald-500">
                <CheckCircle className="w-5 h-5" />
                <span>Two-factor authentication is enabled</span>
              </div>
            )}
          </div>

          {/* Email Verification */}
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-2 bg-emerald-500/10 rounded-lg">
                <Mail className="w-5 h-5 text-emerald-500" />
              </div>
              <div>
                <h2 className="text-lg font-medium text-white">Email Verification</h2>
                <p className="text-sm text-zinc-400">Verify your email address</p>
              </div>
            </div>

            {currentUser.emailVerified ? (
              <div className="flex items-center gap-2 text-emerald-500">
                <CheckCircle className="w-5 h-5" />
                <span>Email verified</span>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-amber-500">
                  <AlertCircle className="w-5 h-5" />
                  <span>Email not verified</span>
                </div>
                <button
                  onClick={() => {/* Handle resend verification */}}
                  className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  Resend Verification Email
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 